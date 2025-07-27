import React from 'react'

function PageTitle({title}) {
  return (
    <section className="page-title bg-primary position-relative">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="text-white font-tertiary">{title}</h1>
                </div>
            </div>
        </div>
        {/* <!-- background shapes --> */}
        <img src="/images/illustrations/page-title.png" alt="illustrations" className="bg-shape-1 w-100" />
        <img src="/images/illustrations/leaf-pink-round.png" alt="illustrations" className="bg-shape-2" />
        <img src="/images/illustrations/dots-cyan.png" alt="illustrations" className="bg-shape-3" />
        <img src="/images/illustrations/leaf-orange.png" alt="illustrations" className="bg-shape-4" />
        <img src="/images/illustrations/leaf-yellow.png" alt="illustrations" className="bg-shape-5" />
        <img src="/images/illustrations/dots-group-cyan.png" alt="illustrations" className="bg-shape-6" />
        <img src="/images/illustrations/leaf-cyan-lg.png" alt="illustrations" className="bg-shape-7" />
    </section>
    
  )
}

export default PageTitle