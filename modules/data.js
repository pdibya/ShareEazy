var mongoose=require('mongoose');
mongoose.set("strictQuery", true);
mongoose.connect('mongodb+srv://Kishanfs:Kishanbackend@clusterkishan.3awamvm.mongodb.net/?retryWrites=true&w=majority');
//  mongoose.connect('mongodb://Kishan:AdminKishan@localhost:27017/share?authSource=admin',{useNewUrlParser:true});
//   mongoose.connect( 'mongodb+srv://AkashSingh:akash9876@cluster0.wcy87x2.mongodb.net/todo?retryWrites=true&w=majority',{useNewUrlParser:true,rejectUnauthorized:false});
var conn=mongoose.Collection;

var userSchema=new mongoose.Schema({
    dataname:{
        type:String,
        required:true, 
    },
    datasize:{
        type:String,
        required:true,
    },
    DateTime: {type: Date, default: Date.now},

});
userSchema.index({ DateTime: 1 }, { expireAfterSeconds: 900 });
var userModel=mongoose.model('todo',userSchema);
module.exports=userModel;