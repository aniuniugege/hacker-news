'use strict'

const port = process.env.port || process.env.npm_config_port || 8080 

module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://hacker-news.firebaseio.com/v0/',
                changeOrigin: true
            }
        },
        port: port
    }
}