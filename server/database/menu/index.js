import mongooose from "mongoose";

const MenuSchema = new  mongooose.Schema({
    menus : [
        {
            name: {  type: String, required: true  },
            items: [
                {
                type:mongooose.Types.ObjectId,
                ref: "Foods"
                }
            ]
        }
    ],
    recommended: [
        {
            type:mongooose.Types.ObjectId,
            ref: "Foods",
            unique: true  
        }
    ]
},
{
  timestamps: true
});

export const MenuModel = mongooose.model("Menus", MenuSchema);