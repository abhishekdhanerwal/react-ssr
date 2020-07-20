module.exports = {
    //run babel on every js file
    module : {
        rules : [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            },
            {test: /\.css$/, exclude: /node_modules/,
              use: [
                {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
                  options: {
                     modules: true
                  }
               }
              ]
            },
            {test: /\.css$/, include: /node_modules/,
              use: ['style-loader','css-loader']
            }
        ]
    }
}