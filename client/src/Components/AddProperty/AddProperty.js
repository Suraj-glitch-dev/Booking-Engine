import React, { Component } from "react";
import Imagecard from "./addImage3.png";
import "./AddProperty.css";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import AddRooms from "./AddRooms";
import axios from "axios";
// import e from "express";

const defaultState = {
  Image: Imagecard,
  // PropertyId: "",
  // PropertyIdErr: "",
  name_: "",
  name: "",
  city: "",
  description: "",
  contact: "",
  address: "",
  ratings: "",
  website: "",
  location: "",
  WAcontact: "",
  WAcontactError: "",
  url1: "",
  url2: "",
  url3: "",
  url4: "",
  locationErr: "",
  hotelNameErr: "",
  addressErr: "",
  cityErr: "",
  decsErr: "",
  ratingErr: "",
  contactError: "",
  wifi: false,
  breakfast: false,
  sanitized: false,
  gym: false,
  pool: false,
  laundry: false,
  beverages: false,
};
class AddProperty extends Component {
  constructor(props) {
    super(props);

    this.state = defaultState;
  }
  submitValidation = () => {
    let hotelNameErr = "";
    let addressErr = "";
    let cityErr = "";
    let decsErr = "";
    let ratingErr = "";
    let contactError = "";
    // let PropertyIdErr = "";
    if (!this.state.location) {
      locationErr = "Enter Location";
    }
    if (locationErr) {
      this.setState({ locationErr });
    }
    // if (!this.state.PropertyId) {
    //   PropertyIdErr = "Enter Property ID";
    // }
    // if (PropertyIdErr) {
    //   this.setState({ PropertyIdErr });
    // }
    if (!this.state.name) {
      hotelNameErr = "Enter Hotel Name";
    }
    if (hotelNameErr) {
      this.setState({ hotelNameErr });
    }
    if (this.state.address == "") {
      addressErr = "Enter Address";
    }
    if (addressErr) {
      this.setState({ addressErr: addressErr });
      // return false;
    }
    if (!this.state.city) {
      cityErr = "Enter Location";
    }
    if (cityErr) {
      this.setState({ cityErr: cityErr });
      // return false;
    }
    if (!this.state.description) {
      decsErr = "Enter Hotel description";
    }
    if (decsErr) {
      this.setState({ decsErr });
      // return false;
    }
    if (!this.state.ratings) {
      ratingErr = "Enter Hotel Rating";
    }
    if (ratingErr) {
      this.setState({ ratingErr });
      // return false;
    }
    if (!this.state.contact) {
      contactError = "Enter contact";
    }
    if (contactError) {
      this.setState({ contactError });
      // return false;
    }
    if (!this.state.WAcontact) {
      WAcontactError = "Enter contact";
    }
    if (WAcontactError) {
      this.setState({ WAcontactError });
      return false;
    }
    console.log("city error = ", this.state.cityErr);
    return true;
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.submitValidation();
    console.log("city error = ", this.state.cityErr);

    if (isValid) {
      const data = {
        name: this.state.name,
        Address: this.state.address,
        location: this.state.city,
        description: this.state.description,
        ratings: this.state.ratings,
        contact: this.state.contact,
      };
      axios
        .post("http://localhost:5000/property/addProperty", data)
        .then((res) => {
          console.log("repsonse = ", res);
        })
        .catch((error) => {
          console.log("error = ", error);
        });
      console.log("this.state = ", data);
      this.setState({ defaultState });
    }
  };
  handleLocation = (e) => {
    this.setState({
      location: e.target.value,
      locationErr: "",
    });
  };
  // handlePropertyId = (e) => {
  //   this.setState({
  //     PropertyId: e.target.value,
  //     PropertyIdErr: "",
  //   });
  // };
  handleWifi = (e) => {
    this.setState({
      wifi: !this.state.wifi,
    });
    console.log("wifi = ", this.state.wifi);
  };
  handleSanitized = (e) => {
    this.setState({
      sanitized: !this.state.sanitized,
    });
    console.log("sani = ", this.state.sanitized);
  };
  handlebreakfast = (e) => {
    this.setState({
      breakfast: !this.state.breakfast,
    });
    console.log("gym:= ", this.state.breakfast);
  };
  handleGym = (e) => {
    this.setState({
      gym: !this.state.gym,
    });
    console.log("wifi = ", this.state.wifi);
  };
  handlePool = (e) => {
    this.setState({
      pool: !this.state.pool,
    });
    console.log("pool = ", this.state.pool);
  };
  handleLaundry = (e) => {
    this.setState({
      laundry: !this.state.laundry,
    });
    console.log("laundry = ", this.state.laundry);
  };
  handleParking = (e) => {
    this.setState({
      parking: !this.state.parking,
    });
    console.log("parking= ", this.state.parking);
  };
  handleBeverages = (e) => {
    this.setState({
      beverages: !this.state.beverages,
    });
    console.log("beverages = ", this.state.beverages);
  };
  // handleInputChange = (event) => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // };
  handleUrl1 = (e) => {
    this.setState({
      url1: e.target.value,
      // hotelNameErr: "",
    });
  };
  handleUrl2 = (e) => {
    this.setState({
      url2: e.target.value,
      // hotelNameErr: "",
    });
  };
  handleUrl3 = (e) => {
    this.setState({
      url3: e.target.value,
      // hotelNameErr: "",
    });
  };
  handleUrl4 = (e) => {
    this.setState({
      url4: e.target.value,
      // hotelNameErr: "",
    });
  };
  handleHotelName = (e) => {
    this.setState({
      name: e.target.value,
      hotelNameErr: "",
    });
  };
  handleAddress = (e) => {
    this.setState({
      address: e.target.value,
      addressErr: "",
    });
  };
  handleCity = (e) => {
    this.setState({
      city: e.target.value,
      cityErr: "",
    });
  };
  handleDesc = (e) => {
    this.setState({
      description: e.target.value,
      decsErr: "",
    });
  };
  handleRating = (e) => {
    this.setState({
      ratings: e.target.value,
      ratingErr: "",
    });
  };
  handleContact = (e) => {
    this.setState({
      contact: e.target.value,
      contactError: "",
    });
  };
  handleContactWA = (e) => {
    this.setState({
      WAcontact: e.target.value,
      WAcontactError: "",
    });
  };
  handleImage = (e) => {
    this.setState({
      Image: URL.createObjectURL(e.target.files[0]),
    });
    console.log("imge func = ", e.target.files);
  };
  // handleUpload = () => {};
  render() {
    // console.log("length =", this.props.propertyList.length);
    return (
      <div>
        <div className="propertyCard">
          <div className="firstHeading">
            <h1>Enter your Property Details</h1>
          </div>
          <form>
            <div className="ContainerTwo">
              <div className="addImages">
                {/* <div className="setImage">
                  <input
                    type="file"
                    name="image-upload"
                    id="input"
                    accept="image/*"
                    multiple="true"
                    onChange={this.handleImage}
                  ></input>
                  <div className="label" id="choose">
                    <label htmlFor="input" className="image-upload">
                      <AddPhotoAlternateIcon /> Choose Images
                    </label>
                  </div>
                  <div className="imageDiv">
                    <img src={this.state.Image} className="image"></img>
                  </div>
                </div> */}
                <div className="insideAddImages">
                  <div className="imageHeight">
                    {/* Image URL */}
                    <input
                      type="url"
                      name="url1"
                      placeholder="Add Image URL"
                      value={this.state.url1}
                      onChange={this.handleUrl1}
                    ></input>
                    <div className="imageDiv">
                      <img
                        src={this.state.url1}
                        alt="Add Image Url"
                        className="image"
                      ></img>
                    </div>
                  </div>
                  <div className="imageHeight">
                    {/* Image URL */}
                    <input
                      type="url"
                      name="url2"
                      value={this.state.url2}
                      onChange={this.handleUrl2}
                    ></input>
                    <div className="imageDiv">
                      <img src={this.state.url2} className="image"></img>
                    </div>
                  </div>
                  <div className="imageHeight">
                    {/* Image URL */}
                    <input
                      type="url"
                      name="url3"
                      value={this.state.url3}
                      onChange={this.handleUrl3}
                    ></input>
                    <div className="imageDiv">
                      <img src={this.state.url3} className="image"></img>
                    </div>
                  </div>
                  <div className="imageHeight">
                    {/* Image URL */}
                    <input
                      type="url"
                      name="url4"
                      value={this.state.url4}
                      onChange={this.handleUrl4}
                    ></input>
                    <div className="imageDiv">
                      <img src={this.state.url4} className="image"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="addDetails">
                <div>
                  {/* Property Id :
                  <input
                    name="PropertyId"
                    required
                    value={this.state.PropertyId}
                    placeholder="Property ID"
                    onChange={this.handlePropertyId}
                    className={`${
                      this.state.hotelNameErr !== "" ? "inputError" : ""
                    }`}
                  ></input> */}
                  <div className="detailsContainer">
                    <input
                      name="name"
                      required
                      placeholder="Property Name"
                      onChange={this.handleHotelName}
                      className={`${
                        this.state.hotelNameErr !== "" ? "inputError" : ""
                      }`}
                    ></input>
                    <input
                      name="address"
                      required
                      type="text"
                      placeholder="Address"
                      onChange={this.handleAddress}
                      className={`${
                        this.state.addressErr !== "" ? "inputError" : ""
                      }`}
                    ></input>
                    <input
                      name="city"
                      type="text"
                      required
                      placeholder="City"
                      onChange={this.handleCity}
                      className={`${
                        this.state.cityErr == "" ? "" : "inputError"
                      }`}
                    ></input>
                    <input
                      name="location"
                      required
                      type="text"
                      placeholder="Location"
                      onChange={this.handleLocation}
                      className={`${
                        this.state.locationErr !== "" ? "inputError" : ""
                      }`}
                    ></input>
                    <div>{this.state.cityErr}</div>
                    <textarea
                      id="adjustHeight"
                      required
                      name="description"
                      type="text"
                      placeholder="Hotel Description"
                      onChange={this.handleDesc}
                      className={`${
                        this.state.decsErr !== "" ? "inputError" : ""
                      }`}
                    ></textarea>
                  </div>
                  <div className="ratingAndContact">
                    <input
                      id="rating"
                      required
                      name="ratings"
                      type="number"
                      // pattern="\d*"
                      max="5"
                      min="1"
                      placeholder="Rating"
                      onChange={this.handleRating}
                      className={`${
                        this.state.ratingErr !== "" ? "inputError" : ""
                      }`}
                    ></input>
                    <input
                      id="contact"
                      required
                      name="contact"
                      type="number"
                      // pattern="\d*"
                      min="6000000000"
                      maxLength="9999999999"
                      placeholder="Contact Number"
                      onChange={this.handleContact}
                      className={`${
                        this.state.contactError !== ""
                          ? "inputError"
                          : "noError"
                      }`}
                    ></input>
                    <input
                      id="WAcontact"
                      required
                      name="WAcontact"
                      type="number"
                      // pattern="\d*"
                      min="6000000000"
                      maxLength="9999999999"
                      placeholder="Whatsapp Number"
                      onChange={this.handleContactWA}
                      className={`${
                        this.state.WAcontactError !== ""
                          ? "inputError"
                          : "noError"
                      }`}
                    ></input>
                  </div>
                  <div>
                    <div className="facilities1">
                      <h3>Facilities </h3>
                      <div className="F1">
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.wifi}
                            onChange={this.handleWifi}
                          ></input>
                          Wifi
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.gym}
                            onChange={this.handleGym}
                          ></input>
                          GYM
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.pool}
                            onChange={this.handlePool}
                          ></input>
                          Swimming Pool
                        </label>
                      </div>
                      <div className="F2">
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.parking}
                            onChange={this.handleParking}
                          ></input>
                          Parking
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.beverages}
                            onChange={this.handleBeverages}
                          ></input>
                          Beverages
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.beverages}
                            onChange={this.handleBeverages}
                          ></input>
                          Beverages
                        </label>
                      </div>
                      <div className="F3">
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.breakfast}
                            onChange={this.handlebreakfast}
                          ></input>
                          BreakFast
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.sanitized}
                            onChange={this.handleSanitized}
                          ></input>
                          Sanitized
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            checked={!this.state.laundry}
                            onChange={this.handleLaundry}
                          ></input>
                          Laundry / Dry Cleaning
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit">
                  <button onClick={this.handleSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <AddRooms />
      </div>
    );
  }
}

export default AddProperty;
