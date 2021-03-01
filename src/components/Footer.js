import React from 'react'
class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <footer class="bg-primary text-center text-white">
                    <div class="container p-4">
                        <section class="mb-4">
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i class="fab fa-twitter">
                                </i>
                            </a>
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i class="fab fa-google"></i>
                            </a>
                            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                                <i class="fab fa-instagram">
                                </i>
                            </a>
                        </section>
                        <div class="text-center p-3">
                            © 2021 Copyright <a class="link-to" href="https://www.youtube.com/dumbminds">Recursion</a>
                        </div>
                    </div>
                </footer>
            </div >
        )
    }
}
export default Footer;