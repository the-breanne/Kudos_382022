<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Request Meeting</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Request 1-on-1 With:</label>
                    <input type="text" class="form-control" v-model="meetingRequest.name" required>
                </div>

                <div class="form-group">
                    <label>Date</label>
                    <input type="text" class="form-control" v-model="meetingRequest.date" required>
                </div>

                <div class="form-group">
                    <label>Description</label>
                    <input type="text" class="form-control" v-model="meetingRequest.description" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Request</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import { db } from '../main'


    export default {
        data() {
            return {
                meetingRequest: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('meetingRequests').add(this.meetingRequest).then(() => {
                    alert("Meeting successfully requested!");
                    this.meetingRequest.name = ''
                    this.meetingRequest.date = ''
                    this.meetingRequest.description = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>