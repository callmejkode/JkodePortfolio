import React from 'react'

const FooterDialogue = ({scroll}) => {
  return (
    <div className='mx-3 position-relative'>
                <div className="container FooterBox ">
          <div className="row FooterBoxForLg">
            <div className="col-sm text-center">
              <p className="FooterTextRow1">Start a Project</p>
            </div>
            <div className="col-sm text-center">
              <p>
                Interested in working together? We should queue up a time to
                chat. I’ll buy the coffee.
              </p>
            </div>
            <div className="col-sm text-center mt-3">
              <button onClick={() => scroll.current.scrollIntoView()} className="ContactBthn " style={{color:"#fff"}}>Let's Do This</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FooterDialogue