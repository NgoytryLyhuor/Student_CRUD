<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Add Students</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="saveStudent">
                    <div class="mb-3">
                        <label for="">Name</label>
                        <input type="text" v-model="studentData.name" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="">Course</label>
                        <input type="text" v-model="studentData.course" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="">Email</label>
                        <input type="text" v-model="studentData.email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="">Phone</label>
                        <input type="text" v-model="studentData.phone" class="form-control">
                    </div>
                    <div class="mb-3">
                        <button class="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            studentData: {
                name: '',
                course: '',
                email: '',
                phone: '',
            }
        }
    },
    methods: {
        saveStudent() {
            axios
                .post('http://127.0.0.1:8000/api/student/store', this.studentData)
                .then(res => {
                    console.log(res);
                    this.studentData = {
                        name: '',
                        course: '',
                        email: '',
                        phone: '',
                    }
                    this.$router.push('/student')
                })
        }
    }
}
</script>