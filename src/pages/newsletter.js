import React, { useState } from 'react'
import Layout from '../components/Layout'
import Footer from '../components/Footer'

function NewsletterPage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const content = (
    <div>
      <div className="container">
        <div className="row">
          <div
            className="col col-12 col-xs-12"
            style={{ position: 'relative' }}
          >
            {isLoading && (
              <div
                style={{
                  position: 'absolute',
                  top: '20%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                  width: '57px',
                  height: '57px',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/loader-tail-spin.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </div>
            )}
            <iframe
              src="https://us20.campaign-archive.com/home/?u=4b9b07f44a3c9768397a9cb9f&id=7c6b1e3624"
              width="100%"
              height="100%"
              title="DWeb Newsletter Archive"
              style={{
                border: 'none',
                minHeight: '1500px',
                opacity: isLoading ? 0 : 1,
                transition: 'opacity 0.3s',
              }}
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )

  return <Layout content={content} />
}

export default NewsletterPage
