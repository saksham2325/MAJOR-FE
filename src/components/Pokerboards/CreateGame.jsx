import React, { useEffect, useState } from "react";

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { createGame } from "actions/pokerBoard";
import { ESTIMATE_TYPE, GAME_VALUES, validNumberList } from "constants/values";
import { resetAlert } from "actions/alert";
import { toastErrorMsg } from "constants/messages.js";
import { urls } from "constants/urls";

const CreateGame = (props) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [deck, setDeck] = useState('');
  const [estimateType, setEstimateType] = useState(ESTIMATE_TYPE.FIBONACCI);
  const [error, setError] = useState({});
  const { addToast } = useToasts();
  const history = useHistory();
  const id = localStorage.getItem("id");
  const { alert, createGame, resetAlert, user } = props;

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (name.length < GAME_VALUES.MIN_SIZE || name.length > GAME_VALUES.MAX_NAME_SIZE) {
      return addToast(toastErrorMsg.GAME_NAME, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if(deck.length===GAME_VALUES.MIN_SIZE) {
      return addToast(toastErrorMsg.DECK_SIZE, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (!validNumberList(deck)) {
      return addToast(toastErrorMsg.VALID_NUMBER_LIST, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    const array = deck.split(",");
    if (new Set(array).size !== array.length) {
      return addToast(toastErrorMsg.DECK_DUPLICATE, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    createGame({name, duration, deck, estimateType});
  };

  useEffect(() => {
    resetAlert();
    if (!id) {
      history.push(urls.root);
    }
  }, []);

  useEffect(() => {
    if (!id) {
      history.push(urls.root);
    }
  }, [id]);

  return (
    <div>
      <form onSubmit={handleInputSubmit}>
        <h2>Create PokerBoard</h2>
        <label>
          Name *
          <input
            type="text"
            placeholder="Enter Game name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
        </label>
        <label>
          Duration
          <input
            type="string"
            placeholder="Enter Game duration"
            onChange={(event) => {
              setDuration(event.target.value);
            }}
          />
        </label>
        <label>
          Deck *
          <input
            type="text"
            placeholder="Enter deck of cards"
            onChange={(event) => {
              setDeck(event.target.value);
            }}
          />
        </label>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-standard-label">
            Estimate Type
          </InputLabel>
          <Select
            name="estimateType"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={estimateType}
            label="Estimate Type"
            onChange={(event) => {
              setEstimateType(event.target.value);
            }}
          >
            <MenuItem value={ESTIMATE_TYPE.SERIAL}>Serial</MenuItem>
            <MenuItem value={ESTIMATE_TYPE.EVEN}>Even</MenuItem>
            <MenuItem value={ESTIMATE_TYPE.ODD}>Odd</MenuItem>
            <MenuItem value={ESTIMATE_TYPE.FIBONACCI}>Fibonacci</MenuItem>
            <MenuItem value={ESTIMATE_TYPE.CUSTOM}>Custom</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Create Game
        </Button>
      </form>
      {alert && <h2>{alert}</h2>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducers.user,
  alert: state.alertReducer.alert,
});

const mapDispatchToProps = (dispatch) => ({
  resetAlert: () => {
    dispatch(resetAlert());
  },
  createGame: (body) => {
    dispatch(createGame(body));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);
