require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Cloudinary Images`,
    description: `Get the images from Cloudinary`,
    author: `Ranganath`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/upload`,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'Gatsby-images',
      }
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `image`,
      }
    }
  ],
}
