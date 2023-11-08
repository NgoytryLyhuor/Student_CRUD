<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Students
                    <RouterLink to="/student/create" class="btn btn-primary float-end">
                        Add Student
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Create At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.students.length > 0">
                        <tr v-for="student in students" :key="student.id">
                            <td>{{ student.id }}</td>
                            <td>{{ student.name }}</td>
                            <td>{{ student.course }}</td>
                            <td>{{ student.email }}</td>
                            <td>{{ student.phone }}</td>
                            <td>{{ student.created_at }}</td>
                            <td>
                                <RouterLink :to="{ path: '/student/edit/'+student.id }" class="btn btn-primary">Edit</RouterLink>
                                <button type="button" @click="deleteStudent(student.id)" class="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr colspan="7">Loading...</tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            students: []
        }
    },
    mounted(){
        this.getStudent();
    },
    methods:{
        getStudent(){
            axios
            .get('http://127.0.0.1:8000/api/student')
            .then(res => this.students = res.data)
        },
        deleteStudent(studentId){
            if(confirm('Are you sure you want to delete this ?')){
                axios
                .post(`http://127.0.0.1:8000/api/student/delete/${studentId}`)
                .then(res => {
                    this.getStudent()
                })
            }
        }
    }
}
</script>