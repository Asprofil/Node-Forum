import Joi from 'joi';
   
   export default   {
     createPost: {
       body: {
         title:   Joi.string().required(),
         test:   Joi.string().required(),
       },
     },
   };