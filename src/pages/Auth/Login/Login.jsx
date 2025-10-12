function Login() {
    return (
        <>
        <div className="text-center vh-100 bg-light align-items-center">

            <div className="pt-5 pb-3">  
                <p class="text-3"><span class="text-rgb-15-52-96">Welcome Back</span></p>
                <p class="text-4"><span class="text-rgb-75-85-99">Sign in to access your exclusive travel account</span></p>
            </div> 

            <div className="d-flex justify-content-center">
                <div className="card shadow-lg rounded-4 p-4" style={{ width: "550px" }}>
                    <h2 className="text-center fw-bold mb-4">Login</h2>
                    <form>
                    <div className="mb-3">
                        <label htmlFor="loginEmail" className="form-label fw-semibold">
                        Email
                        </label>
                        <input
                        type="email"
                        className="form-control"
                        id="loginEmail"
                        placeholder="you@example.com"
                        required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label fw-semibold">
                        Password
                        </label>
                        <input
                        type="password"
                        className="form-control"
                        id="loginPassword"
                        placeholder="Enter password"
                        required
                        />
                    </div>

                    <button type="submit" className="btn bg-brand w-100 fw-semibold">
                        Login
                    </button>

                    
                    </form>
                </div>
                </div>
                    <p className="text-center mt-3 mb-0">
                        Don't have an account? <a href="/Register">Register</a>
                    </p>
        </div>
            
        </>
    )
}
export default Login