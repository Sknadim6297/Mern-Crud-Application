const User= require('../api/Models/User')


const getAllUsers=async(req,res) => {
    try {
        const user=await User.find({});
        res.status(200).json({message:"Sucsess",user})
        
    } catch (error) {
        return res.json({message: error.message})
    }

}

const createUser=async (req,res)=>{
    const {name,email,jobTitle,company}=req.body;

    try {
        const newUser= await User.create({name,email,jobTitle,company});

        res.status(201).json({message:"User created Succsesfully",newUser})
        
    } catch (error) {
        return res.json({message: error.message})
        
    }

}
const deleteUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const deleteUser=await User.findByIdAndDelete(id);
        if(!deleteUser){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"User deleted Succsesfully"})
        
    } catch (error) {
        return res.json({message: error.message})
        
    }
}

const updateUser=async (req,res)=>{

    const {id}=req.params;

    const {name,email,jobTitle,company}=req.body;
    try {
        const updateUser=await User.findByIdAndUpdate(id,{name,email,jobTitle,company},{new:true,runValidators:true});
        if(!updateUser){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"User updated Succsesfully",updateUser})
        
    } catch (error) {
        return res.json({message: error.message})
        
    }
}


const singlUser=async(req,res)=>{
    const {id}=req.params;
    try {
        const user=await User.findById(id);
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        res.status(200).json({message:"User found Succsesfully",user})
        
    } catch (error) {
        return res.json({message: error.message})
        
    }
}
module.exports ={
    getAllUsers,
    createUser,
    deleteUser,
    updateUser,
    singlUser

}