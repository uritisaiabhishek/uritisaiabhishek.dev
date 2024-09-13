import React, { useEffect, useState } from 'react'

function CookiePopup() {
    const [showCookiePopup, setShowCookiePopup] = useState(false);

    useEffect(() => {
        // Check if the cookie has been accepted
        const cookieAccepted = document.cookie.split('; ').find(row => row.startsWith('cookieAccepted='));
        if (!cookieAccepted) {
            setShowCookiePopup(true);
        }
    }, []);

    const handleCloseCookiePopup = () => {
        // Set a cookie that expires in 1 year
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        document.cookie = `cookieAccepted=true; expires=${expirationDate.toUTCString()}; path=/`;
        setShowCookiePopup(false);
    };

  return (
    <>
        {/* Cookies Start */}
        {showCookiePopup && (
            <div className="card cookie-popup shadow rounded py-3 px-4">
                <p className="text-muted mb-0">
                    This website uses cookies to provide you with a great user experience. By using it, you accept our <a href="https://shreethemes.in" target="_blank" className="text-success h6">use of cookies</a>.
                </p>
                <div className="cookie-popup-actions text-end">
                    <button onClick={handleCloseCookiePopup}>
                        <i className="uil uil-times text-dark fs-4"></i>
                    </button>
                </div>
            </div>
        )}
        {/* Cookies End */}
    </>
  )
}

export default CookiePopup