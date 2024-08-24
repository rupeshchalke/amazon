const Contact = () =>{

    return(
        <div>
        <div class="container-fluid bg-light text-center m-auto p-5">
            <div class="fa-regular fa-envelope text-primary display-6"></div>
                  <h2>Get in touch</h2>
                  <p>We'd love to hear from you</p>
                  <div class="w-25 p-2 m-auto">
                    <input type="text" placeholder="Full Name" class="form-control mt-3"/>
                    <input type="email" placeholder="Email Address" class="form-control mt-3"/>
                    <input type="tel" placeholder="Phone Number" class="form-control mt-3"/>
                    <textarea type="text" placeholder="Message" rows="4" class="form-control mt-3"></textarea>
                    <a href="#" class="btn btn-primary w-100 mt-3">Submit</a>
                </div>
          </div>
          {/* section-3  */}
          <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-md-2 m-auto pt-5 pb-5">
                    <a href="#" class="btn btn-primary mb-2"><i class="fa-solid fa-comment-dots fa-2x"></i></a>
                    <h3>Chat with us</h3>
                    <p>Chat live with one of our support specialists.</p>
                </div>
                <div class="col-md-3 m-auto pt-5 pb-5">
                    <a href="#" class="btn btn-primary mb-2"><i class="fa-solid fa-user-group fa-2x"></i></a>
                    <h3>Ask the community</h3>
                    <p>Explore our community forums and communicate with other users.</p>
                </div>
                <div class="col-md-2 m-auto pt-5 pb-5">
                    <a href="#" class="btn btn-primary mb-2"><i class="fa-regular fa-circle-question fa-2x"></i></a>
                    <h3>Support center</h3>
                    <p>Browse FAQ's and support articles to find solutions.</p>
                </div>
                <div class="col-md-2 m-auto pt-5 pb-5">
                    <a href="#" class="btn btn-primary mb-2"><i class="fa-solid fa-phone fa-2x"></i></a>
                    <h3>Call us</h3>
                    <p>Call us during normal business hours at (555) 892-9403.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact