<template>
    <div>
        <md-button class="md-icon-button md-raised" @click="initClass">
            <md-icon>edit</md-icon>
        </md-button>

        <div id="dialog">
            <md-dialog :md-active.sync="editting" md-close-on-esc>
                <md-dialog-title>Изменение класса {{  idClass  }}</md-dialog-title>

                <md-dialog-content>
                    <md-field md-clearable>
                        <label>Буква класса</label>
                        <md-input v-model.trim="className" type="text"></md-input>
                    </md-field> 
                </md-dialog-content>

                <md-dialog-actions>
                    <md-button class="md-primary" v-on:click="editClass">Изменить</md-button>
                    <md-button class="md-accent" v-on:click="editting = false">Отмена</md-button>
                </md-dialog-actions>
            </md-dialog>
        </div>
        <div>
            <md-snackbar :md-duration="1000" :md-active.sync="showGoodSnackbar" md-persistent>
                <p>Изменения сохранены</p>
             </md-snackbar>
        </div>
    </div>
</template>

<script lang="ts">
import { ClassModel } from '@/modules/PersonModels'
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
@Component
export default class classEdit extends Vue {
    @Prop() classes!: ClassModel
    private editting = false;
    private idClass = 0;
    private className = ''
    private showGoodSnackbar = false;

    public initClass(): void {
        this.editting = true;
        this.idClass = this.classes.idClass;
        this.className = this.classes.className;
    }

    public editClass(): void {
        if (this.className != '') {
            this.editting = false;
            this.showGoodSnackbar = true;
            this.classes.className = this.className
        }
    }

}
</script>