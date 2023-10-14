/** @type {import('next').NextConfig} */

const dotenv = require('dotenv')

const nextConfig = {
    env: dotenv.config()
}

module.exports = nextConfig
