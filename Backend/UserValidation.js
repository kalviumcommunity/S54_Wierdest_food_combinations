const Joi =require('joi')

const UserValidation = Joi.object({
  Image: Joi.string().uri().required(),
  FoodName: Joi.string().min(3).max(50).required(),
  FoodCategory: Joi.string()
    .valid(
      'Sweet',
      'Sweet and Savoury',
      'Sweet and Spicy',
      'Sweet and Tangy',
      'Sweet and Creamy',
      'Sweet and Salty'
    )
    .required(),
  Region: Joi.string().min(3).max(50).required()
});

module.exports = UserValidation
