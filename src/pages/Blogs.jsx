const Blogs = () => {
  return (
    <div className="max-w-[1200px] min-h-screen mx-auto grid md:grid-cols-2 gap-4 py-20">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is an access token and refresh token?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            A refresh token just helps you re-validate a user without them
            having to re-enter their login credentials multiple times. The
            access token is re-issued, provided the refresh token is a valid one
            requesting permission to access confidential resources.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          How do they work and where should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            If your app needs to call APIs on behalf of the user, access tokens
            and (optionally) refresh tokens are needed. These can be stored
            server-side or in a session cookie. The cookie needs to be encrypted
            and have a maximum size of 4 KB.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is express js?
        </div>
        <div className="collapse-content">
          <p>
            Express, is a back end web application framework for building
            RESTful APIs with Node.js  released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          What is Nest JS
        </div>
        <div className="collapse-content">
          <p>
            Nest.js is a progressive Node.js framework that takes inspiration
            from both Angular and Spring. It provides a solid foundation for
            building scalable and maintainable server-side applications.
            Launched in 2017, Nest.js quickly gained popularity in the
            JavaScript community thanks to its powerful features and
            developer-friendly approach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
