import React from "react"
import { navigateTo } from "gatsby-link"

export default ({ data }) => {
  return (
    <div>
    {data.allUtopianPost.edges.map(({ node }) => (
      <div>
        <a href={`https://utopian.io${node.url}` }>{node.title}</a> in {node.json_metadata.type} category on {new Date(node.created).toLocaleDateString()}
      </div>
    ))}
    </div>
    );
  };
    
export const query = graphql`
  query IndexQuery {
      allUtopianPost {
        edges {
          node {
            id
            permlink
            author
            created
            url
            title
            json_metadata {
              community
              app
              format
              platform
              type
            }
          }
        }
      }
    }
`;
