import React from "react";
import ArtecianHeader from "./ArtecianHeader";
import ArtecianSideBar from "./ArtecianSideBar";
import PaymentPage from "./PaymentPage";

const PricingPakage = () => {
	return (
		<div class='page-wrapper dashboard'>
			<ArtecianHeader />
			<ArtecianSideBar />

			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<section class='pricing-section'>
						<div class='auto-container'>
							<div class='sec-title text-center'>
								<h2>Pricing Packages</h2>
								<div class='text'>
									Here are our awesome pricing package with very afordable price
								</div>
							</div>

							<div class='pricing-tabs tabs-box wow fadeInUp'>
								<div class='tab-buttons'>
									<h4>Save up to 10%</h4>
									<ul class='tab-btns'>
										<li data-tab='#monthly' class='tab-btn active-btn'>
											Monthly
										</li>
										<li data-tab='#annual' class='tab-btn'>
											AnnualSave
										</li>
									</ul>
								</div>

								<div class='tabs-content'>
									<div class='tab active-tab' id='monthly'>
										<div class='content'>
											<div class='row'>
												<div class='pricing-table col-lg-4 col-md-6 col-sm-12'>
													<div class='inner-box'>
														<div class='title'>Basic</div>
														<div class='price'>
															Free <span class='duration'></span>
														</div>
														<div class='table-content'>
															<ul>
																<li>
																	<span>5 Chat messages Each</span>
																</li>
																<li>
																	<span>20 Add Service Category</span>
																</li>
																<li>
																	<span>Edit Profile</span>
																</li>
																<li>
																	<span>No Calls</span>
																</li>
															</ul>
														</div>
													</div>
												</div>

												<div class='pricing-table tagged col-lg-4 col-md-6 col-sm-12'>
													<div class='inner-box'>
														<span class='tag'>Recommended</span>
														<div class='title'>Standard</div>
														<div class='price'>
															#500 <span class='duration'>/ monthly</span>
														</div>
														<div class='table-content'>
															<ul>
																<li>
																	<span>50 chat messages Each</span>
																</li>
																<li>
																	<span>10 Clients can see your Profile</span>
																</li>
																<li>
																	<span>Clients Can Call</span>
																</li>
																<li>
																	<span>50 Add Service Category </span>
																</li>
															</ul>
														</div>
														<div class='table-footer'>
															<PaymentPage />
														</div>
													</div>
												</div>

												<div class='pricing-table col-lg-4 col-md-6 col-sm-12'>
													<div class='inner-box'>
														<div class='title'>Extended</div>
														<div class='price'>
															#1000 <span class='duration'>/ monthly</span>
														</div>
														<div class='table-content'>
															<ul>
																<li>
																	<span>Unlimited Chat messages</span>
																</li>
																<li>
																	<span>Unlimited users Can view Profile</span>
																</li>
																<li>
																	<span>Unlimited Add Service Category</span>
																</li>
																<li>
																	<span>Unlimited Bookings </span>
																</li>
															</ul>
														</div>
														<div class='table-footer'>
															<PaymentPage />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div class='tab' id='annual'>
										<div class='content'>
											<div class='row'>
												<div class='pricing-table col-lg-4 col-md-6 col-sm-12'>
													<div class='inner-box'>
														<div class='title'>Basic</div>
														<div class='price'>
															$1199 <span class='duration'>/ Annual</span>
														</div>
														<div class='table-content'>
															<ul>
																<li>
																	<span>1 job posting</span>
																</li>
																<li>
																	<span>0 featured job</span>
																</li>
																<li>
																	<span>Job displayed for 20 days</span>
																</li>
																<li>
																	<span>Premium Support 24/7 </span>
																</li>
															</ul>
														</div>
														<div class='table-footer'>
															<a href='#' class='theme-btn btn-style-three'>
																View Profile
															</a>
														</div>
													</div>
												</div>

												<div class='pricing-table tagged col-lg-4 col-md-6 col-sm-12'>
													<div class='inner-box'>
														<span class='tag'>Recommended</span>
														<div class='title'>Standard</div>
														<div class='price'>
															$1499 <span class='duration'>/ Annual</span>
														</div>
														<div class='table-content'>
															<ul>
																<li>
																	<span>1 job posting</span>
																</li>
																<li>
																	<span>0 featured job</span>
																</li>
																<li>
																	<span>Job displayed for 20 days</span>
																</li>
																<li>
																	<span>Premium Support 24/7 </span>
																</li>
															</ul>
														</div>
														<div class='table-footer'>
															<a href='#' class='theme-btn btn-style-three'>
																View Profile
															</a>
														</div>
													</div>
												</div>

												<div class='pricing-table col-lg-4 col-md-6 col-sm-12'>
													<div class='inner-box'>
														<div class='title'>Extended</div>
														<div class='price'>
															$1799 <span class='duration'>/ Annual</span>
														</div>
														<div class='table-content'>
															<ul>
																<li>
																	<span>1 job posting</span>
																</li>
																<li>
																	<span>0 featured job</span>
																</li>
																<li>
																	<span>Job displayed for 20 days</span>
																</li>
																<li>
																	<span>Premium Support 24/7 </span>
																</li>
															</ul>
														</div>
														<div class='table-footer'>
															<a href='#' class='theme-btn btn-style-three'>
																View Profile
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</section>

			<section class='user-dashboard'>
				<div class='dashboard-outer'>
					<div class='row'>
						<div class='col-lg-12'>
							<div class='ls-widget'>
								<div class='tabs-box'>
									<div class='widget-title'>
										<h4>My Packages</h4>
									</div>

									<div class='widget-content'>
										<div class='table-outer'>
											<table class='default-table manage-job-table'>
												<thead>
													<tr>
														<th>#</th>
														<th>Transaction id</th>
														<th>Package</th>
														<th>Expiry</th>

														<th>Status</th>
													</tr>
												</thead>

												<tbody>
													<tr>
														<td>1</td>
														<td class='trans-id'>#593677663</td>
														<td class='package'>
															<a href='#'>Super CV Pack</a>
														</td>
														<td class='expiry'>Jan 11, 2021</td>

														<td class='status'>Active</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default PricingPakage;
