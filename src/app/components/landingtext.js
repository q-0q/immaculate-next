
import './landingtext.css'

export default function LandingText() {
    return (
    <div
      style={{width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', overflow: 'hidden' }}>
      
      <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'fixed' }}>
  
        <div className="slide_out">
          <div className="slide_in" style={{animationDelay: '0s'}}>
            <p className="monarch_landing">
              IMMACULATE
            </p>
          </div>
        </div>
        <div className="slide_out">
          <div className="slide_in" style={{animationDelay: '0.1s'}}>
            <p className="monarch_landing">
              CONCEPTION
            </p>
          </div>
        </div>
        <div className="slide_out">
          <div className="slide_in" style={{animationDelay: '0.2s'}}>
            <p className="monarch_landing">
              COLLECTIVE
            </p>
          </div>
        </div>
  
  
      </div>
      
  
  
  
    </div>
  
    );
  }
  