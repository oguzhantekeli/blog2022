import "./contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="gmap">googlemap comes here</div>
        <div className="contact-services">
          <div className="service-item">
            <h3>item 1 title</h3>
            <p>
              lorems ullamcorper euismod non a ipsum. Cras et urna mi. Vivamus a
              interdum magna. Maecenas gravida turpis non scelerisque
              vestibulum. Nulla bibend
            </p>
          </div>
          <div className="service-item">
            <h3>item 2 title</h3>
            <p>
              velit. Nam pulvinar pharetra orci feugiat suscipit. Vestibulum
              velit diam, bibendum nec varius in, ultrices et odio. Sed aliquet
              tellus vel commodo vehicula. Suspendisse quis rutrum nulla, sit
              amet blandit neque. Curabitur eleifend gravida nisi. Vestibulum
              condimentum commodo nunc eu vest
            </p>
          </div>
          <div className="service-item">
            <h3>item 3 title</h3>
            <p>
              volutpat pulvinar consequat. Proin purus eros, porta ac rutrum
              non, vehicula quis massa. In et nunc enim. Sed sed metus ut turpis
              ullamcorper euismod non a ipsum. Cras et urna mi. Vivamus a
              interdum magna. Maecenas gravida turpis non scelerisque
              vestibulum. Nulla bibendum, ligula ac
            </p>
          </div>
        </div>
        <div className="contact-form">
          <div className="form-body">
            <form className="contact-form-group" method="post" action="">
              <div className="form-group">
                <input type="text" placeholder="name" name="name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="email" name="email" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="phone" name="phone" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="subject" name="subject" />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  placeholder="message"
                  name="message"
                ></textarea>
              </div>
              <button className="btn btn-submit" type="submit" name="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
