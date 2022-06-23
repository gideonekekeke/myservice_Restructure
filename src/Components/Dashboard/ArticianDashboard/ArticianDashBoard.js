import React from 'react'
import ArtecianHeader from './ArtecianHeader'
import ArtecianSideBar from './ArtecianSideBar'

const ArticianDashBoard = () => {
  return (
    <div class="page-wrapper dashboard">
    <ArtecianHeader/>
    <ArtecianSideBar/>
    <br/>
    <br/>
   <section class="user-dashboard">
      <div class="dashboard-outer">
        <div class="upper-title-box">
          <h3>Welcome, Jerome!!</h3>
          <div class="text">Artecian</div>
        </div>
        <div class="row">
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="ui-item">
              <div class="left">
                <i class="icon flaticon-briefcase"></i>
              </div>
              <div class="right">
                <h4>0</h4>
                <p>Booked</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="ui-item ui-red">
              <div class="left">
                <i class="icon la la-file-invoice"></i>
              </div>
              <div class="right">
                <h4>0</h4>
                <p>OnGoing</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="ui-item ui-yellow">
              <div class="left">
                <i class="icon la la-comment-o"></i>
              </div>
              <div class="right">
                <h4>0</h4>
                <p>Done</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div class="ui-item ui-green">
              <div class="left">
                <i class="icon la la-bookmark-o"></i>
              </div>
              <div class="right">
                <h4>0</h4>
                <p>Canceled</p>
              </div>
            </div>
          </div>
        </div>

      

       


          <div class="col-lg-12">
       
            <div class="applicants-widget ls-widget">
              <div class="widget-title">
                <h4>Booked Service</h4>
              </div>
           <div>table</div>
            </div>
          </div>
        </div>
    
    </section>
    </div>
  )
}

export default ArticianDashBoard