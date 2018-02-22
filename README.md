# Utopian Posts using Gatsby 

In the gatsby-config.js file you need to add the gatsbt-source-utopian as shown below, where user is the username for which you would like to get all teh posts.

```
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-utopian',
      options: {
        user: 'codingdefined',
      },
    },
  ],
};
```

Check all the values using the __GraphiQL 

```
{
  allUtopianPost{
    edges{
      node{
        id
        permlink
        author
        category
        created
        url
      }
    }
  }
}
```

![image.png](https://res.cloudinary.com/hpiynhbhq/image/upload/v1519280130/cmuubqjhqrs3wx1iipoj.png)
