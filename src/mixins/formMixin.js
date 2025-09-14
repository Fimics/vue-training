export const formMixin = {
    data() {
        return {
            loading: false,
            errors: {}
        }
    },
    methods: {
        async submitForm(formData) {
            this.loading = true
            this.errors = {}

            try {
                const response = await this.apiCall(formData)
                this.onSuccess(response)
            } catch (error) {
                // 终极安全方案：只传递基本数据
                const safeData = {
                    message: this.getErrorMessage(error),
                    fieldErrors: this.getFieldErrors(error)
                }
                this.onError(safeData)
            } finally {
                this.loading = false
            }
        },

        getErrorMessage(error) {
            // 层层安全提取错误消息
            if (!error) return '请求失败，请稍后重试'

            if (typeof error === 'string') return error

            if (typeof error === 'object') {
                // 优先检查 error.message
                if (error.message) return error.message

                // 检查 error.response
                if (error.response) {
                    // 检查 error.response.data
                    if (error.response.data) {
                        const data = error.response.data
                        if (data.message) return data.message
                        if (data.error) return data.error
                        if (typeof data === 'string') return data
                    }

                    // 返回状态码对应的消息
                    return this.getStatusMessage(error.response.status)
                }

                // 检查 error.request
                if (error.request) return '请求无响应，请检查网络连接'
            }

            return '请求失败，请稍后重试'
        },

        getStatusMessage(status) {
            const messages = {
                400: '请求参数错误',
                401: '未授权访问',
                403: '禁止访问',
                404: '资源未找到',
                500: '服务器错误',
                502: '网关错误',
                503: '服务不可用',
                504: '网关超时'
            }
            return messages[status] || `请求错误: ${status}`
        },

        getFieldErrors(error) {
            // 安全提取字段错误
            if (error &&
                error.response &&
                error.response.data &&
                error.response.data.errors &&
                typeof error.response.data.errors === 'object') {
                return error.response.data.errors
            }
            return {}
        },

        onSuccess(response) {
            console.log('提交成功:', response)
        },

        onError(errorData) {
            // 现在 errorData 绝对安全
            this.errors = errorData.fieldErrors || {}
            if (Object.keys(this.errors).length === 0 && errorData.message) {
                this.errors.message = errorData.message
            }
            console.error('提交失败:', errorData.message)
        },

        apiCall(formData) {
            console.log(formData)
            throw new Error('apiCall method must be implemented')
        }
    }
}