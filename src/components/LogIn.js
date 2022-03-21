import '../Login.css';
const LogIn = () => {
    return ( 
        <div className="login-wrapper">
           <div className="login-heading">
               <h3 class="centered1">Login</h3>
            </div>
            <div className="login-form container">
                <form>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-field">
                            <label>Username or E-Mail</label>
                            <input type="email" className="username"></input>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-field">
                            <label>Password</label>
                            <input type="password" className="username"></input>
                        </div>
                    </div>
                    <div className="row">
                    <input type="submit" className="signin"  value="Sign In!"/>
                         <a href="pass" className='forget'>Forget Password?</a>
                    </div>
                </form>
                <div className="register-links">
                    <div className="facebok ">
                    <a href="https://demo.goodlayers.com/traveltour/main4/wp-login.php?loginSocial=google&redirect=https%3A%2F%2Fdemo.goodlayers.com%2Ftraveltour%2Fmain4%2Fregister%2F">
                      <div className="ikon1">
                        <div className="i">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1365.3 1365.3" height="24" width="24"><path d="M1365.3 682.7A682.7 682.7 0 10576 1357V880H402.7V682.7H576V532.3c0-171.1 102-265.6 257.9-265.6 74.6 0 152.8 13.3 152.8 13.3v168h-86.1c-84.8 0-111.3 52.6-111.3 106.6v128h189.4L948.4 880h-159v477a682.8 682.8 0 00576-674.3" fill="#fff"></path></svg>
                        </div>
                        <div className="p">
                          <p>
                            Continue with <b>Facebook</b>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="google mt-2">
                    <a href="https://demo.goodlayers.com/traveltour/main4/wp-login.php?loginSocial=google&redirect=https%3A%2F%2Fdemo.goodlayers.com%2Ftraveltour%2Fmain4%2Fregister%2F">
                      <div className="ikon2">
                        <div className="i">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M11.988,14.28 L11.988,9.816 L23.22,9.816 C23.388,10.572 23.52,11.28 23.52,12.276 C23.52,19.128 18.924,24 12,24 C5.376,24 -9.47390314e-15,18.624 -9.47390314e-15,12 C-9.47390314e-15,5.376 5.376,0 12,0 C15.24,0 17.952,1.188 20.028,3.132 L16.62,6.444 C15.756,5.628 14.244,4.668 12,4.668 C8.028,4.668 4.788,7.968 4.788,12.012 C4.788,16.056 8.028,19.356 12,19.356 C16.596,19.356 18.288,16.176 18.6,14.292 L11.988,14.292 L11.988,14.28 Z"></path></svg>
                        </div>
                        <div className="p">
                          <p>
                            Continue with <b>Google</b>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="twitter mt-2">
                    <a href="https://demo.goodlayers.com/traveltour/main4/wp-login.php?loginSocial=google&redirect=https%3A%2F%2Fdemo.goodlayers.com%2Ftraveltour%2Fmain4%2Fregister%2F">
                      <div className="ikon3">
                        <div className="i">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ><path fill="#fff" d="M16.327 3.007A5.07 5.07 0 0 1 20.22 4.53a8.207 8.207 0 0 0 2.52-.84l.612-.324a4.78 4.78 0 0 1-1.597 2.268 2.356 2.356 0 0 1-.54.384v.012A9.545 9.545 0 0 0 24 5.287v.012a7.766 7.766 0 0 1-1.67 1.884l-.768.612a13.896 13.896 0 0 1-9.874 13.848c-2.269.635-4.655.73-6.967.276a16.56 16.56 0 0 1-2.895-.936 10.25 10.25 0 0 1-1.394-.708L0 20.023a8.44 8.44 0 0 0 1.573.06c.48-.084.96-.06 1.405-.156a10.127 10.127 0 0 0 2.956-1.056 5.41 5.41 0 0 0 1.333-.852 4.44 4.44 0 0 1-1.465-.264 4.9 4.9 0 0 1-3.12-3.108c.73.134 1.482.1 2.198-.096a3.457 3.457 0 0 1-1.609-.636A4.651 4.651 0 0 1 .953 9.763c.168.072.336.156.504.24.334.127.68.22 1.033.276.216.074.447.095.673.06H3.14c-.248-.288-.653-.468-.901-.78a4.91 4.91 0 0 1-1.105-4.404 5.62 5.62 0 0 1 .528-1.26c.008 0 .017.012.024.012.13.182.28.351.445.504a8.88 8.88 0 0 0 1.465 1.38 14.43 14.43 0 0 0 6.018 2.868 9.065 9.065 0 0 0 2.21.288 4.448 4.448 0 0 1 .025-2.28 4.771 4.771 0 0 1 2.786-3.252 5.9 5.9 0 0 1 1.093-.336l.6-.072z"></path></svg>
                        </div>
                        <div className="p">
                          <p>
                            Continue with <b>Twitter</b>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="Create-member">
                     <h5>DO NOT HAVE AN ACCOUNT? </h5>
                     <p><a  href={"/SignUp"}>CREATE AN ACCOUNT</a></p>
                </div>
              </div>
        </div>
     );
}
 
export default LogIn;