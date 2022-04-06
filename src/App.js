import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='navbarCont'>
        <nav className='navbarMax'>
          <a href='#Home'>Home</a>
          <a href='#Principals'>Principals</a>
          <a href='#StrategicPartners'>Strategic Partners</a>
          <a href='#StrategicPartners'>Contact</a>
        </nav>
      </nav>
      <div className='AboutPage'>
        <div className='AboutPageCards'>
          <h1>Congistics LLC</h1>
          <div className='homepageButtonCont'>
            <button id='homePageButtonExplore'>
              <a href='#Home'>
                About
              </a>
            </button>
            <button id='homePageButtonExplore'>
              <a href='#Principals'>
                Principals
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id='Home' className='UsPage'>
        <h1>About</h1>
        <div className='usPageSectionsCon'>
          <p>
            Congistics, LLC is a diverse company providing expert contract and financial services to various construction and disaster relief projects on a global basis. Services provided include trucking, crane and lifting services, engineering, excavation, heavy haul and various logistical services as well as Project Financing.
          </p>
          <br></br>
          <p>
            Working in conjunction with our team of Strategic Partners, Congistics, LLC provides our services to a wide array of markets including FEMA relief projects, infrastructure projects such as power plants, highways, bridges, and city redevelopment projects. Congistics also provides contract services and project financing for major stadium modernization and new construction for the NFL, MLB and major colleges.
          </p>
          <br></br>

          <p>
            Combining the services of experts in construction, equipment, government relations and strategic consulting as well as project financing, Congistics, LLC is able to minimize their clients exposure to risk while providing a varying array of specialists to compete their projects on a timely and efficient manner.
          </p>
          <br></br>

        </div>
      </div>
      <div id='Principals' className='PrincipalsPage'>
        <h1 id='h1Princ'>
          Principals
        </h1>
        <div className='PrincipalsPageBoxLayoutCont'>
          <div className='PrincipalsCard'>
            <div className='PrincipalsCardImage'>
              <img id='imageForPrinc' alt='profile' src={'data:image/jpeg;base64,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'}></img>
              <h3>
                President
              </h3>
            </div>
            <div className='PrincipalsCardText'>
              <h1 id='h1TagforCardText'>Richard Rossi</h1>

              <div id='ptagCont'>
                <p id='ptagTextforCards'>
                  Richard Rossi has over 30 years integral involvement in the crane, trucking, heavy lift and energy industries with an extensive background in administration, risk management and human resources as Vice President of Administration for the world's largest crane rental company. Areas of expertise include litigation management, accident investigation and analysis, contract management and safety procedural implementation.
                </p>
                <br></br>
                <p id='ptagTextforCards'>
                  Richard is currently an officer and partner in Congistics, LLC and Diamond Head Trucking, Inc. as well as CEO of Lex Holdings Management, Inc, a heavy equipment consulting company. He also serves as a director of PFBC Environmental Energy Technology, Inc., a clean coal technology company in the renewable energy sector. He is also a past director of White Camp Solar, LLC and Black Bear Energy Services, Inc.
                </p>
              </div>
            </div>
          </div>
          <div className='PrincipalsCard'>
            <div className='PrincipalsCardImage'>
              <img id='imageForPrinc' alt='profile' src={'data:image/jpeg;base64,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'}></img>
              <h3>
                Sr Vice President
              </h3>
            </div>
            <div className='PrincipalsCardText'>
              <h1 id='h1TagforCardText'>David Golupski</h1>
              <div id='ptagCont'>
                <p id='ptagTextforCards'>
                  David Golupski has over 30 years experience in the Transportation and Logistics Industry. His experience include 25 years as an Officer at Fedex Ground where he ran the Eastern Division. He also served as COO at APX Logistics, a nationwide asset based logistics company, General Manager and VP at Source One Transportation, a tanker truck company providing services to the oil and gas industry, and currently is President and Principal at Diamond Head Trucking, a dump truck company providing services to US Steel, construction, oil and gas markets.                </p>
              </div>
            </div>
          </div>
          <div className='PrincipalsCard'>
            <div className='PrincipalsCardImage'>
              <img id='imageForPrinc' alt='profile' src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMOEhIOEBMQDg8QDQ0PDg4ODQ8PEA8NFREWFhUSFhUYHCggGCYlGxMTITEhJSkrLi4uFx8zODMsNyg5LisBCgoKDQ0NDw0NDysZFRktLS0rKystLSsrKysrNy0rKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIFBgQDB//EADMQAQACAAMGBAUEAQUBAAAAAAABAgMEEQUhMTJBURJhcXIigZGhsRNCgsFSM2KS0fAj/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP1sEVFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAZAAiKgAAAAAAAAAAAAAAAAAAAAAAAAAAMgARFQAAAAAAAAAAAY4mJWvNMV9ZeW208KP3a+lZkHsHijauF3mPWkvRhZml+W1Z8tdJB9QkAAAAAAAAAABkACIqAAAAAAAAl7RWJtM6REazPaAS94rGtp0iOMzwafN7Xm27D+GP8p5p9OzzZ/Oziz2pE/DXy7y8qot7TO+ZmZ7zOqCAAA9uU2lfD3T8desW4/KW7yuarixrWfWsxviXMM8DGthz4qzpP2n1B1Q+GUzMYtfFG6eFq9Yl90UAAAAAAABkACIqAAAAAAANPtvM7/0o6aTf16Q297xWJtPCsTMuUxLzaZtPG0zM+pCsQFQAAAAAB6tn5n9K8TPLOkXjy7uk/8AauRdFsrG8eHGu+afDP8ASUj2ACgAAAAAMgARFQAAAAAAHk2rfTCt56R9Zc4323P9OPfX+2hVKAAAAAAAAra7BvvvXvES1LZbD559k/mCkbwBFAAAAAAZAAiKgAAAAAAPDtiuuFPlasufdXj4Xjran+VZj5uV07/OFiVAAAAAAAAVs9g1+K09qxH3axvdi4Phw/F1vOvyKRsAEUAAAAABkACIqAAAAAAANDtjL+C/jjlvv/l1hvnzzOBGJWaz14TpwnuDlR9Mxgzh2mlo0mPvHeHzVAAAAAF0+fl59gfTL4M4lopHGZ3+UdZdRSsViKxuiIiIePZmS/SjW3PaN/lHZ7UqwAAAAAAABkACIqAAAAAAAAA+GaytcWNJ6cto4w0ObyV8KfiiZr0vEbph0ppru6duijkR0GY2bhzvn/5+loiPpLxYmzKxwxafy01+0mpjWLDYV2bXrjYfymP7l68HZWHxm3j8vFGn2NMafBwZvOlYm0+XTzlvNn7OjC+K3xX+1XsphxWNKx4Y7RGjIUAQAAAAAAAAZAAiKgAAAAAwxMSKx4rTERHWWqze1+mHGn++0b/lANtiYlaRraYrHeZ01eDH2xSOWJt9oaXExJtOtpm095nVguJr34u1sSeGlI8o1n6y8uJmb25r2n+U/h8gDTvvAA0NAB9KYtq8trR6Wl6cLamJHXxe6N/1eIMG6wdsxO69ZjzrvhsMHMVxOS0T5a7/AKOVZRbTfEzExwmN0mGusGjym1rV3X+OO/C0NxgY9cSNaTE+XCY9UxX0AAAAABkACIqAAAPNnM5XBjWd9v21jjP/AEZ7Nxg11nfaeWPPu53FxZtM2tOszxkK+mazNsWdbTr2r+2IfBUVAAAAAAAAAAAAFZYWLNJ8VZms+XX1YAOgyG0YxfhtpW/bpb0e5yVZ68J6THGG+2Znv1I8FueI/wCUdwe8BFAAZAAiKgDHEtFYm08IjWWTVbcx9IjDjr8U+gNZmsxOJabT8o7Q+KoqAAAAAAAAAAAAAAAADOmJNZi0bpid0+bAB0+UzEYtYtHHhaO1ur7tFsXH8N/BPC/D3Q3qKAAyABEVAHObTxfHi3npExWPSHRw5XMc1vdb8rEr5igIKAgoCCgIKAgoCCgIKAgoCCijLDt4Zi3aYn7uqidd/eNfq5KXUZXkp7K/hKR9gEVkACIqAOWzPNb3W/LqXLZnnt7rflYlfIAAAAAAAAAAAAAAAAAAAB1GU5Keyv4cu6jKclPZX8FI+wCKyAAAAcpmee3ut+QWJXyAAAAAAAAAAAAAAAAAAABXU5Pkp7IApH2ARQAH/9k='}></img>
              <h3>
                Senior Consultant
              </h3>
            </div>
            <div className='PrincipalsCardText'>
              <h1 id='h1TagforCardText'>Larry Vignali</h1>

              <div id='ptagCont'>
                <p id='ptagTextforCards'>
                  Larry Vignali currently serves as Senior Consultant to Whitmer & Worrall, and brings over 20 years of strategic development and institutional investment sales experience. Mr. Vignali's clients have included investment funds, corporate and government entities, and family offices. In addition to consulting for Whitmer and Worrall, he is a partner with Plus Strategic Advisors working as director of business development and capital formation. Current clients and partners include the Touax Group, NDH Capital, Brahman Capital, Bruns-Pak and JHJ Facilities. Mr. Vignali also serves on the advisory board at Docusign and incubator, Innovate OC. He is licensed Series 7 and 63.                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div id='StrategicPartners' className='StrategicPartners'>
        <h1>
          Strategic Partners
        </h1>
        <div className='StrategicPartnersCont'>
          <div className='StrategicPartnersCards'>
            <img id='logoForpartners' alt='profile' src={'https://cdn.nar.realtor/sites/default/files/images/logos/designations_certifications/psa.jpg'}></img>
            <p>
              Plus Strategic Advisors is a strategic and tactical advisory boutique that offers advisory, consulting, business development, strategic relationships and capital formation services and solutions. Our extensive experience and network can provide established firms growth to build, buy, grow their business. Our emphasis is in infrastructure, technology, and renewable energy.
            </p>
          </div>
          <div className='StrategicPartnersCards'>
            <img alt='profile' id='logoForpartners' src={'https://images.cranenetwork.com/logos/ba9ac10cfef9a78032d6f6ada.jpg'}></img>
            <p>
              Lomma Crane and Rigging is one of the premier providers of cranes, heavy transportation and rigging in the United States.  With years of experience in large project equipment management, Lomma has been instrumental in some of the largest FEMA disaster relief projects as well as new construction projects in the U.S.  Lomma was the lead crane and equipment supplier and manager of the 911 disaster in New York City as well as the sites rebuild of One World Trade Center.            </p>
          </div>
          <div className='StrategicPartnersCards'>
            <img alt='profile' id='logoForpartners' src={'https://images.squarespace-cdn.com/content/v1/5ab01619cc8fedb1f4498114/1525897239571-3393VLTTE0VR3RE0HUXD/Diamond+Logo+-+Transparent.png'}></img>
            <p>
              Diamond Head Trucking, Inc., a division of H G Ventures, Inc., is a Pittsburgh, Pennsylvania regional tri-axle trucking company providing trucking and brokerage services to the steel, gas and heavy highway construction sectors. Diamond Head's customer base includes U S Steel as well as many of the major gas drilling, suppliers and affiliated service companies. In business for more than ten years, it is owned and managed by the same management of Congistics, LLC..            </p>
          </div>

          <div className='StrategicPartnersCards'>
            <img alt='profile' id='logoForpartners' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk93LcIMQ4Jm_lv8v_NZ-G7H6EvIbbeFQHRg&usqp=CAU'}></img>
            <p>
              Whitmer & Worrall is one of Washington D. C.’s leading government relations and strategic business development firms representing companies and institutions who seek to be leaders in their respective industries.  Their areas of specialization are transportation, appropriations, energy, manufacturing and healthcare. Whitmer & Worrall has the capability to help their clients navigate the complexities of the U.S. Congress, federal agencies, the White House and state capitals. Co-founder Martin Whitmer led President Trump’s transportation transition efforts for the new administration.            </p>
          </div>

          <div className='StrategicPartnersCards'>
            <img alt='profile' id='logoForpartners' src={'https://dackconsulting.com/wp-content/uploads/2019/02/dack-consulting-logo.jpg'}></img>
            <p>
              DACK Consulting Solutions, Inc., a MWBE White Plains, NY firm, provides estimating, scheduling, project management, owner’s representative, and MWBE outreach & compliance services to governmental agencies, architects, municipalities, developers, construction managers, and general contractors for governmental, institutional, commercial, industrial and residential projects both nationally and internationally. Partnering with many of the nation’s leading contractors and institutions, Dack is involved in all phases of projects, including pre-development, pre-construction, construction and post construction.          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
