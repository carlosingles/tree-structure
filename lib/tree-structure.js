'use babel'

import Vue from 'vue'
import './tree-structure-view'
import { CompositeDisposable } from 'atom'

export default {

  treeStructureView: null,
  modalPanel: null,
  subscriptions: null,

  activate (state) {
    this.treeStructureView = new Vue({
      data: state.treeStructureViewState,
      render (h) {
        return h(
          'tree-structure-view'
        )
      }
    }).$mount()
    var _this = this
    this.treeStructureView.$nextTick(function () {
      _this.treePanel = atom.workspace.addRightPanel({
        item: _this.treeStructureView.$el,
        visible: true
      })
      // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
      _this.subscriptions = new CompositeDisposable()

      // Register command that toggles this view
      _this.subscriptions.add(atom.commands.add('atom-workspace', {
        'tree-structure:toggle': () => _this.toggle()
      }))
    })
  },

  deactivate () {
    this.treePanel.destroy()
    this.subscriptions.dispose()
    this.treeStructureView.$destroy()
  },

  serialize () {
    return {
      treeStructureViewState: this.treeStructureView.$data
    }
  },

  toggle () {
    return (
      this.treePanel.isVisible()
      ? this.treePanel.hide()
      : this.treePanel.show()
    )
  }

}
