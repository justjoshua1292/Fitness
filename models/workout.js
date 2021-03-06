const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
//   name: {
//     type: String,
//     trim: true,
//     required: "Enter a name for workout"
//   },
//   value: {
//     type: Number,
//     required: "Enter an workout"
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
day: {
    type: Date,
    default: Date.now
},
exercises: [
  {
    type: {
        type: String,
        trim: true,
        required: "Enter a type for workout"   
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"    
    },
    
    duration: {
        type: Number,
         required: "Enter a number"
    },
    weight: {
        type: Number,
        
    },
    reps: {
        type: Number,
        
    },
    distance: {
        type: Number,
        
    },
    sets: {
        type: Number,
        
    },
  },
],
}, {
    toJSON: {
        virtuals: true
    }
}

);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
