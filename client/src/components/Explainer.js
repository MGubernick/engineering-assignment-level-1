import { Paper } from "@material-ui/core"

function Explainer() {
  return (
    <Paper style={{ padding: 20 }}>
      <h3 style={{ marginTop: 0 }}>
        Welcome to Coastline Engineering's Level 1 Take Home Assignment
      </h3>
      <p>This assignment is part of a two-step process:</p>
      <ol>
        <li>Implement a solution to this assignment in code</li>
        <li>
          Present your solution to our hiring committee to discuss why you
          implemented your solution the way you did, and to discuss potential
          enhancements or optimizations
        </li>
      </ol>
      <h4>General Rules & Guidelines</h4>
      <p>
        This is a fairly open-ended assignment, but there are a few over-arching
        things to keep in mind:
      </p>
      <ul>
        <li>
          You can use whatever help you need to complete the assignment, such as
          Googling things and asking friends for help
        </li>
        <li>
          However, keep in mind you will have to walk through your solution with
          us, so be sure you understand how everything works
        </li>
        <li>
          As an example, if you have a decent solution that you understand, but
          find a better one on Stack Overflow that you don't, use yours
        </li>
        <li>
          You are allowed to change anything you would like with the way we've
          set up this challenge, with one exception: please do not change the
          data in the JSON files - they are specifically designed to require you
          to make list and detail API calls separately
        </li>
        <li>
          This repo is setup to use JavaScript, but if you're more comfortable
          with TypeScript, feel free to use TS
        </li>
        <li>
          If at any time you have questions or something here isn't clear, don't
          hesitate to reach out to us to ask, or make a note of it for when we
          meet to discuss your solution
        </li>
        <li>
          This assignment is not meant to test your knowledge of any single
          library, like Material UI - you can use any styling system you please
          - Material UI is included here only as a shortcut to a visually
          appealing starting point
        </li>
      </ul>
      <h4>The Requirements</h4>
      <p>
        You are building an API in Node/Express, and a client with React. From
        the user's perspective, it should work like this:
      </p>
      <ul>
        <li>
          Loading the home page should show available "products" for purchase
        </li>
        <li>
          Clicking on one of those products (or a call to action Button) should
          then display the details of the chosen product
        </li>
      </ul>
      <p>
        Those are the totality of the core requirements. There are an infinite
        number of enhancements you can make if you see fit, but at minimum, it
        should satisfy those requirements.
      </p>
      <p>Some more details about the files in this repo:</p>
      <ol>
        <li>
          On the server side, in <code>server.js</code>, you should have two
          endpoints: <code>/api/v1/products</code>, which returns the contents
          of <code>data-prices.json</code>, and <code>/api/v1/product</code>,
          which takes <code>id</code> as a query parameter, and returns the
          corresponding object from the <code>data-details.json</code> object.
          Note that there is a lot of overlap between the data, though{" "}
          <code>data-prices.json</code> also includes the price per product
        </li>
        <li>
          On the client side, in <code>/client/src/</code>, you will want to
          start with the <code>pages/Home.js</code> component - you should place
          your code in here or in children components as you see fit
        </li>
      </ol>
      <p>
        Note that we realize it's contrived to have to make a separate API call
        for each product when there are only three and you could return all the
        data in one go in the <code>products</code> endpoint. Assume this could
        scale to thousands of products where that would not be a good solution.
      </p>
      <h4>Time Expectations</h4>
      <p>
        We expect you to be able to complete this assignment in 2-3 hours.
        Please focus on the core requirements rather than adding bells and
        whistles. Quality over quantity.
      </p>
      <h4>Enhancements, or, What we Don't Expect</h4>
      <p>
        If you find yourself completing the core requirements quickly and want
        to add more, we would suggest the following:
      </p>
      <ul>
        <li>Use routes for the list-detail pattern</li>
        <li>Use a modal for the detail view</li>
        <li>Use Material UI's Card component for the list view items</li>
        <li>Add unit (or smoke) tests</li>
        <li>
          Implement a global state solution (certainly overkill for this but it
          could be fun)
        </li>
        <li>Use GraphQL instead of fetch/axios calls</li>
        <li>Store the data in a database instead of files</li>
        <li>
          Show spinners or ininite progress bars while waiting for data to load
        </li>
        <li>
          Add proper error handling to the API endpoints and show errors in the
          UI as needed
        </li>
      </ul>
      <p>
        Please do not spend two days adding all of these things in order to
        stand out. That is not the purpose of this assignment.
      </p>
      <h4>Wrapping Up</h4>
      <p>
        When you're done, make a pull request back to{" "}
        <strong>your own repo</strong>. Do not make a PR to this repo as that
        will be public. Be sure to write pull request comments the way you would
        if this were being merged into a production system. Also, you'll
        probably want to remove the <code>&lt;Explainer /&gt;</code> line from{" "}
        <code>Home.js</code> to remove this explainer.
      </p>
      <p>
        We appreciate you taking the time to complete this task, and look
        forward to discussing your solution!
      </p>
    </Paper>
  )
}

export { Explainer }
