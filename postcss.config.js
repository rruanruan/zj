/**
 * Created by hekk on 2017/5/23.
 */
module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer')({browsers: ['last 2 versions', 'iOS >= 7', 'Android >= 4']})
    ]
};
