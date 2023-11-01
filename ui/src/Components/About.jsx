import React from 'react';

function About() {
    return (
        <>
         <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src="Images/Profile.png"
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-white lh-1 mb-3">
      Hi, I'm Gowtham.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
      </h1>
      <p className="lead">
      Detail Oriented undergraduate with a passion for developing a software, seeking an internship to apply my techincal
knowledge and gain practical experience.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
          Default
        </button>
      </div>
    </div>
  </div>
</div>
</>
    );
}

export default About;