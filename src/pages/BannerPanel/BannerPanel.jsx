"use client";
import React from 'react';
import './BannerPanel.css';
import PropTypes from 'prop-types';
import FormBanner from '../../components/FormBanner/FormBanner';

const BannerPanel = ({}) => {
	return (
		<div className='bannerpanel'>
			<h2>Banner</h2>
 			<FormBanner />
 		</div>
	);
};

BannerPanel.propTypes = {};

export default BannerPanel;