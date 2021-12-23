import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Transaction from 'App/Models/Transaction';
import Database from '@ioc:Adonis/Lucid/Database';

export default class TransactionsController {
    public async index () {
        return Transaction.all()
    }

    public async findone ({ params }: HttpContextContract) {
        return Database
                .from('transactions')
                .select('customerName', 'amount', 'description', 'type', 'user_id')
                .where('id', params.id)
                
    }
      
    public async show ({ params, request }: HttpContextContract) {
        // Finding with paginator
        const data = request.only(['skip', 'limit']);
        return Database
                .from('transactions')
                .where('user_id', params.uid)
                .offset(data.skip)
                .limit(data.limit)
    }
    public async store ({ request, response }: HttpContextContract) {
        const data = request.only(['customerName', 'amount', 'description', 'type', 'uid']);
        const post = {
            customerName: data.customerName,
            amount: data.amount,
            description: data.description,
            type: data.type,
            user_id: data.uid
        };
        await Transaction.create(post);
        return response.json({"message": "Record created successfully! "});
    }
    public async update ({ params, request, response }: HttpContextContract) {
        
        const data = request.only(['customerName', 'amount', 'description', 'type']);
    
        let trans = await Transaction.find(params.id) as Transaction;
    
        trans.customerName = data.customerName;
        trans.amount = data.amount;
        trans.description = data.description;
        trans.type = data.type;
        await trans.save()
        return response.json(trans)
      }
    public async destroy ({ params, response  }: HttpContextContract) {
        const tran = await Transaction.find(params.id)
        tran?.delete();
        return response.json({"message": "Record deleted successfully! "});
    }
}
