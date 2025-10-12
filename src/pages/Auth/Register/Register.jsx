function Register() {
    return (
        <>

        <div className="text-center align-items-center vh-100 bg-light">

            <div className="pt-5 pb-3">
                <p class="text-3"><span class="text-rgb-15-52-96">Create Your Account</span></p>
                <p class="text-4"><span class="text-rgb-75-85-99">Join Exclusive Travels for personalized travel experiences</span></p>
            </div>

            <div className="d-flex justify-content-center ">
              <div className="card shadow-lg rounded-4 p-5" style={{ width: "600px" }}>
                <h2 className="text-center fw-bold mb-4">Register</h2>
                <form>

                    <div className="d-flex gap-3">
                            <div className="mb-3">
                            <label htmlFor="registerName" className="form-label fw-semibold">
                            First Name
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="registerName"
                            placeholder="John"
                            required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="registerName" className="form-label fw-semibold">
                            Surname
                            </label>
                            <input
                            type="text"
                            className="form-control"
                            id="registerName"
                            placeholder="D. Oe"
                            required
                            />
                        </div>
                    </div>
                  

                  <div className="mb-3">
                    <label htmlFor="registerEmail" className="form-label fw-semibold">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="registerEmail"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label fw-semibold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="registerPassword"
                      placeholder="Enter password"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="registerPassword" className="form-label fw-semibold">
                      Retype Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="registerPassword"
                      placeholder="Confirm password"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100 fw-semibold">
                    Register
                  </button>

                </form>
                    
                    

              </div>
                    
            </div>
                    <p className="text-center mt-3 mb-0">
                    Already have an account? <a href="/login">Login</a>
                    </p>

        </div>
        </>
    )
}
export default Register