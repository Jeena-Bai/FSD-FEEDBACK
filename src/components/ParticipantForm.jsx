import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';

const ParticipantForm = () => {
  const navigate = useNavigate();
  const [ratings, setRatings] = useState({
    relevance: 0,
    contentDelivery: 0,
    confidence: 0,
    trainerRating: 0,
  });
  const [feedback, setFeedback] = useState({
    enjoyedMost: '',
    additionalComments: '',
  });

  const handleRatingChange = (event, newValue) => {
    setRatings({
      ...ratings,
      [event.target.name]: newValue,
    });
  };

  const handleTextChange = (event) => {
    setFeedback({
      ...feedback,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ ratings, feedback });

    // Show thank you message
    alert('Thank you for your valuable feedback.');

    // Redirect to ictkerala.org
    window.location.href = 'https://ictkerala.org';
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Training Feedback Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>1. The training course was relevant and helpful for me to relate.</Typography>
            <Rating
              name="relevance"
            
              value={ratings.relevance}
              onChange={handleRatingChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>2. Delivery of the content was clear and understandable.</Typography>
            <Rating
              name="contentDelivery"
              value={ratings.contentDelivery}
              onChange={handleRatingChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>3. I am confident in applying the learnings into practice.</Typography>
            <Rating
              name="confidence"
              value={ratings.confidence}
              onChange={handleRatingChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography>4. How would you rate the trainer?</Typography>
            <Rating
              name="trainerRating"
              value={ratings.trainerRating}
              onChange={handleRatingChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="What did you enjoy the most about the training session?"
              name="enjoyedMost"
              value={feedback.enjoyedMost}
              onChange={handleTextChange}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Any additional comments/suggestions"
              name="additionalComments"
              value={feedback.additionalComments}
              onChange={handleTextChange}
              fullWidth
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button type="submit" variant="contained" color="primary">
              Submit Feedback
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ParticipantForm;

