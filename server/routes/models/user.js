"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt = require("bcryptjs");
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    user_id: { type: String , unique: true, required: true, dropDups: true  },
    username: String,
    email: { type: String, unique: true, lowercase: true, trim: true },
    password: {type: String, default: '$2a$10$OxHlqsOmNc.qJnzexqJEveFyii3T8XNpwZ99aaVvZpVAi1Zbc3ewi'  },
    image: { type: String, default: 'https://avatars0.githubusercontent.com/u/19704851?s=88&v=4' },
    phone: String,
    firstname: String,
    lastname: String,
    website: String,
    company: String,
    bedName: String,
    productType: String,
    productDescription: String,
    facebookPage: String,
    googlePage: String,
    linkedInPage: String,
    productType: String,
    youTubePage: String,
    loginType:  {type: String, default: 'custom'  },
    block:{ type: Boolean, default:false },
    totalreviews: {type: String, default: '0'},
    userrole:{ type: String, default: 'user'  }, 
}); 
userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcrypt.hash(user.password, salt, function (error, hash) {
            if (error) {
                return next(error);
            }
            user.password = hash;
            next();
        });
    });
});
userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) {
            return callback(err);
        }
        callback(null, isMatch);
    });
};
// Omit the password when returning a user
userSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        delete ret.password;
        return ret;
    }
});
var User = mongoose.model('User', userSchema);
exports.default = User;
//# sourceMappingURL=user.js.map