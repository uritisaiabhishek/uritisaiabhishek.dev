import React from 'react'

function SocialShare() {
  return (
    <>
      <ul className="list-unstyled social-icon d-flex gap-2 flex-wrap mb-0 mt-4">
        <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
        <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
        <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-behance align-middle" title="behance"></i></a></li>
        <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
        <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
        <li className="list-inline-item mb-0"><a href="#" target="_blank" className="rounded"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
        <li className="list-inline-item mb-0"><a href="#" className="rounded"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
      </ul>
    </>
  )
}

export default SocialShare