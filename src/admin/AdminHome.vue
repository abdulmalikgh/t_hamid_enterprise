<template>
  <span>
  <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4" >
            <h2 class="h3 mb-0 text-gray-800">Products</h2>
          </div>

          <div class="row">
            <div class="col-12">
                  <div class="card shadow mb-4">
                      <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-info">Registered Editors</h6>
                          </div>
                            <div class="card-body">
                                <div class="col-12 mb-4 border-left-info" v-if="network_error">
                                  <div class="card  shadow h-100 py-2">
                                    <div class="card-body">
                                      <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"></div>
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                                            <p class="p-5 text-center">
                                               Network Error Try Again!
                                              </p> 
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-12 mb-4" v-else-if="editors.length === 0 && !loading">
                                  <div class="card border-left-info shadow h-100 py-2">
                                    <div class="card-body">
                                      <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"></div>
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                                            <p class="p-5">No Registered Editors</p> 
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                  <div class="col-12 mb-4" v-if="loading">
                                  <div class="card border-left-info shadow h-100 py-2">
                                    <div class="card-body">
                                      <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                          <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"></div>
                                          <div class="h5 mb-0 font-weight-bold text-gray-800">
                                            <p class="">
                                              ...Loading data 
                                              </p> 
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div class="col-12 mb-4" v-if="editors.length > 0 && !loading">
                                  <div class="card border-left-info shadow h-100 py-2">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                           <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                             <thead>
                                              <tr>
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Actions</th>
                                                <th>suspended ?</th>
                                                <th>Approved ?</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr v-for='(editor, key ) in editors' :key="key" >
                                                <td>{{editor.first_name}}</td>
                                                <td>{{editor.last_name}}</td>
                                                <td>{{editor.email}}</td>
                                                <td>
                                                  <button class="btn btn-info btn-sm mybtn" 
                                                      type="button" data-toggle="modal" data-target="#exampleModal"
                                                      :disabled="editor.is_approved"
                                                      @click="confirmApproval(editor.first_name, editor.last_name,editor.id,key, 'isApprove')">{{editor.is_approved ? 'approved': 'unapproved'}}</button>
                                                  <button class="btn btn-danger btn-sm mt-2 mybtn" 
                                                      type="button" data-toggle="modal" data-target="#exampleModal"
                                                      @click="confirmSuspension(editor.first_name, editor.last_name,editor.id,key, 'isSuspend',getValue(editor.is_suspended))" >{{editor.is_suspended ? 'unsuspend': 'suspend'}}</button>
                                                </td>
                                                <td> {{editor.is_suspended ? "Yes": 'No'}} </td>
                                                <td> {{editor.is_approved ? "Yes": 'No'}} </td>
                                              </tr>
                                            </tbody>
                                            <tfoot>
                                              <tr>  
                                        
                                                <th>First Name</th>
                                                <th>Last Name</th>
                                                <th>Email</th>
                                                <th>Actions</th>
                                                <th>suspended ?</th>
                                                <th>Approved ?</th>
                                              </tr>
                                            </tfoot>
                                           </table>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                          </div>
                        </div>

          </div><!--- end of pills content -->
          <!--- start of delete modal --->
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel" v-if="status === 'isApprove'">
                      Do you really want to Approve?
                  </h5>
                  <h5 class="modal-title" id="exampleModalLabel" v-if="status === 'isSuspend'">
                      Do you really want to {{value === 1 ? 'Suspend?' : 'Unsuspend'}}
                  </h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="cancel">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div>
                      <p>{{first_name}} {{last_name}}</p>
                    </div>
                    <div v-if="success">
                      <p  class="text-danger">{{success}}</p>
                    </div>
                    
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-info mr-2 mybtn" v-if="status === 'isApprove'" @click="approve">Approve</button>
                  <button type="button" class="btn btn-info mr-2 mybtn"  @click="suspend" v-if="status === 'isSuspend'">{{value === 1 ?'Suspend': 'Unsuspend' }}</button>
                  <button type="button" class="btn btn-danger mr-2 mybtn" data-dismiss="modal" @click="cancel">Close</button>
                </div>
              </div>
            </div>
          </div>
          <!--- end of delete modal box --->   
  </span>
</template>

<script>

export default {
  data() {
    return {
      editor:'',
      editorId: null,
      key:null,
      last_name:null,
      first_name:null,
      status:null,
      value:null
    }
  },
  methods: {
    

  },
  computed:{
     
  },
  created(){
      
  }
}
</script>

<style scoped>
.mybtn{
  width:100%;
  padding-top:10px 0;
}
</style>