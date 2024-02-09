import "./DashboardTest.css";

const DashboardTest = ({}) => {
  return (
    <div className="dashboardtest">
      <div className="pageOne">
        <header>
          <h3>Logo</h3>
          <button>Ver más</button>
        </header>

        <div className="content">
          <div className="contentOne">

			<div className="contentText">
				<h1>Lorem Ipsum</h1>
				<h5>
				Lorem ipsum dolor sit amet, consectetur <br /> 
				adipiscing elit. Curabitur pharetra sed <br /> 
				nulla vel congue. Vivamus purus eros, <br /> 
				ultrices eget viverra at, faucibus vel tellus. <br />
				Duis venenatis porttitor est, id egestas <br />
				risus pharetra sit amet.
				</h5>
				<button type="button">Ver más</button>
			</div>
          </div>
          <div className="contentTwo">
            <div className="imgPageOne"></div>
          </div>
        </div>
      </div>

      <div className="pageTwo">

		<h1 >Lorem Ipsum</h1>

		<div className="card"> 
			<div className="imgPageTwo"></div>
      <h3>Lorem Ipsum</h3>
      <h4>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</h4>
		</div>
		<div className="card"> 
			<div className="imgPageTwo"></div>
      <h3>Lorem Ipsum</h3>
      <h4>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</h4>
		</div>
		<div className="card"> 
			<div className="imgPageTwo"></div>
      <h3>Lorem Ipsum</h3>
      <h4>Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit.</h4>
		</div>


    <div className="cardTwo">
      <h3>Lorem Ipsum</h3>
      <button>Lorem ipsum</button>
    </div>



	  </div>
      <div className="pageThree">

        <h1>Lorem Impum</h1>

      </div>
    </div>
  );
};

export default DashboardTest;
