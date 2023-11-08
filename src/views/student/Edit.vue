<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>Edit Students</h4>
            </div>
            <div class="card-body">
                <form @submit.prevent="updateStudent">
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
            studentId:'',
            studentData: {
                name: '',
                course: '',
                email: '',
                phone: '',
            }
        }
    },
    mounted(){
        this.studentId = this.$route.params.id
        this.getStudentData(this.$route.params.id)
    },
    methods: {
        getStudentData(studentId){
            axios
            .get(`http://127.0.0.1:8000/api/student/edit/${studentId}`)
            .then(res => {
                this.studentData = res.data
            })
        },  
        updateStudent() {
            axios
            .post(`http://127.0.0.1:8000/api/student/update/${this.studentId}`,this.studentData)
            .then(res =>{
                console.log(res);
                this.$router.push('/student')
            })
        }
    }
}
</script>