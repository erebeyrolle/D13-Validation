const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
//var hash = bcrypt.hashSync("annecy74", salt); //$2a$10$OBWKdD7BFAYf9ILd2ya4g.vcoqQhxNcUyT8/9o4fWvAXl9EnUYdde
//var hash = bcrypt.hashSync("ferney01", salt); //$2a$10$7t5U9JUOW/IEE.LAUoNj6OqmjmHK1OUeoN14e2VNhNScdfPriyUSC
//var hash = bcrypt.hashSync("lyon69", salt);//$2a$10$UQqX9rY428CoCuPUGxr3MeNSL6lnvVmHWxUYu6h3vfRqwW1BKzt7S
console.log(hash)