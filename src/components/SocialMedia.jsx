import React from 'react'

function SocialMedia({ theme }) {
    return (
        <ul className={`list-unstyled ml-5 mt-3 position-relative zindex-1 ${theme == 'dark' && 'text-dark'}`}>
            <li className="mb-3"><a className="text-white" href="https://themefisher.com/"><i className="ti-facebook"></i></a></li>
            <li className="mb-3"><a className="text-white" href="https://themefisher.com/"><i className="ti-instagram"></i></a></li>
            <li className="mb-3"><a className="text-white" href="https://themefisher.com/"><i className="ti-dribbble"></i></a></li>
            <li className="mb-3"><a className="text-white" href="https://themefisher.com/"><i className="ti-twitter"></i></a></li>
        </ul>
    )
}

export default SocialMedia