import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import Drive from '@ioc:Adonis/Core/Drive'
import Invoice from 'App/Models/Invoice';
import Database from '@ioc:Adonis/Lucid/Database';

export default class InvoicesController {

    public async store ({ request, response }: HttpContextContract) {
        const invoiceFile = request.file('invoice_file', {
            size: '1mb',
            extnames: ['jpg', 'png', 'pdf'],
        })
        
        if (!invoiceFile) {
            return
        }
        
        if (!invoiceFile.isValid) {
            return invoiceFile.errors
        }
        let name = invoiceFile.fileName || '';
        let arr = name.split('.');
        arr.splice(arr.length-1, 1);
        let fileName = arr.join(".") + new Date().getTime() + ("" + Math.random()).substring(2, 8) + invoiceFile.extname;
        
        await invoiceFile.move(Application.tmpPath('uploads'), {
            name: fileName,
            overwrite: true, // overwrite in case of conflict
        })
        
        const data = request.only(['customerName', 'transac_id', 'uid']);
        const post = {
            invoiceName: fileName,
            transac_id: data.transac_id,
            user_id: data.uid
        };
        await Invoice.create(post);
        return response.json({"message": "Invoice uploaded successfully! "});
    }

    public async download({ params, response }: HttpContextContract) {
        let invoice = await Database
        .from('invoices')
        .select('invoiceName')
        .where('tid', params.id) as Invoice[];
        
        const filePath = `uploads/${invoice[0].invoiceName}`;
        const isExist = await Drive.exists(filePath);

        if (isExist) {
            return response.download(Application.tmpPath(filePath));
        }
        return 'File does not exist';
    }
    
}
