import React from 'react'

function SocialShare() {
  return (
    <>
      <ul className="list-unstyled social-icon d-flex gap-2 flex-wrap mb-0 mt-4">
        <li className="list-inline-item mb-0"><a href="https://1.envato.market/landrick" target="_blank" className="rounded"><i className="uil uil-shopping-cart align-middle" title="Buy Now"></i></a></li>
        <li className="list-inline-item mb-0"><a href="https://dribbble.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-dribbble align-middle" title="dribbble"></i></a></li>
        <li className="list-inline-item mb-0"><a href="https://www.behance.net/shreethemes" target="_blank" className="rounded"><i className="uil uil-behance align-middle" title="behance"></i></a></li>
        <li className="list-inline-item mb-0"><a href="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-facebook-f align-middle" title="facebook"></i></a></li>
        <li className="list-inline-item mb-0"><a href="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><i className="uil uil-instagram align-middle" title="instagram"></i></a></li>
        <li className="list-inline-item mb-0"><a href="https://twitter.com/shreethemes" target="_blank" className="rounded"><i className="uil uil-twitter align-middle" title="twitter"></i></a></li>
        <li className="list-inline-item mb-0"><a href="mailto:support@shreethemes.in" className="rounded"><i className="uil uil-envelope align-middle" title="email"></i></a></li>
      </ul>
    </>
  )
}

export default SocialShare