<template>
    <div>
        <form @submit.prevent="submit" class="vld-parent" ref="formContainer">
            <!-- <loading :active='isLoading' :is-full-page="fullPage"/> -->
            <div v-if="(PumpData.PumpState === 'Down') || (PumpData.PumpState === 'Error')">
                <md-button class="md-accent" v-on:click="InitDialog">Сброс</md-button>
            </div>
            <div v-else>
                <md-button  disabled>Сброс</md-button>
                <md-tooltip>Недоступно по причине "Статус: {{  PumpData.PumpState  }}"</md-tooltip>
            </div>
            <div>
                <md-dialog :md-active.sync="showDialog">
                    <md-dialog-content>
                        <h4>Вы уверены, что хотите сбросить колонку {{  id  }}</h4>
                    </md-dialog-content>
                    <md-dialog-actions>
                        <md-button class="md-primary" v-on:click="ResetTrk" type="submit">Сбросить</md-button>
                        <md-button class="md-accent" v-on:click="CloseDialog">Отменить</md-button>
                    </md-dialog-actions>
                </md-dialog>
            </div>
            <div>
                <md-snackbar :md-duration="1000" :md-active.sync="showGoodSnackbar" md-persistent>
                    <p>Колонка {{  id  }} сброшена</p>
                </md-snackbar>
            </div>
            <div>
                <md-snackbar :md-duration="1000" :md-active.sync="showBadSnackbar" md-persistent>
                    <p>Сброс отменён</p>
                </md-snackbar>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import axios from 'axios'
    import Component from 'vue-class-component'
    import { Prop } from 'vue-property-decorator'
    // import Loading from 'vue-loading-overlay'
    // import 'vue-loading-overlay/dist/vue-loading.css'
    import { BodyFormData, BaseURL, IPumpsData } from '../modules/ApiModels'
    // Vue.use(Loading);

    @Component
    class resetTrk extends Vue{
        @Prop() PumpData!: IPumpsData;

        private showDialog = false;
        private id = 0;
        private errors = true;
        private showGoodSnackbar = false;
        private showBadSnackbar = false;
        private fullPage = true;

        public InintDialog(): void { 
            this.showDialog = true;
            this.id = this.PumpData.PumpNumber;
        }

        public CloseDialog(): void {
            this.showGoodSnackbar = true;
            this.showDialog = false;
            this.id = 0;
        }

        ResetTrk(): void {
            const ResetTrkURL = BaseURL + 'ResetTrk';
            const ResetTrkForm: BodyFormData = {
                UniqueRequestId: 'string',
                Method: 'Unknown',
                Data: {
                    PumpNumber: this.id,
                }
            }
            axios
                .post(ResetTrkURL, ResetTrkForm)
                .then ()
            setTimeout(() => {
                this.showDialog = false;
                this.showGoodSnackbar = true;
            }, 5000) 
        }
    }

    export default resetTrk
</script>