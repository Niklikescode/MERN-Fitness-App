const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p><strong>Sets: </strong>{workout.sets}</p>
      <p><strong>Weight (kg): </strong>{workout.weight}</p>
      <p>{workout.createdAt}</p>
    </div>
  );
}

export default WorkoutDetails;