package config.spring;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.aop.Advisor;
import org.springframework.aop.aspectj.AspectJExpressionPointcut;
import org.springframework.aop.support.DefaultPointcutAdvisor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.interceptor.DefaultTransactionAttribute;
import org.springframework.transaction.interceptor.RollbackRuleAttribute;
import org.springframework.transaction.interceptor.RuleBasedTransactionAttribute;
import org.springframework.transaction.interceptor.TransactionInterceptor;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;


@Aspect
@Configuration
public class TransactionConfig {

    protected final Log log = LogFactory.getLog(getClass());
    private static final int TX_METHOD_TIMEOUT = 3;
    private static final String AOP_POINTCUT_EXPRESSION = "execution(* synccms.logic.service..*.*(..))";


    @Autowired
    private DataSourceTransactionManager transactionManager;



    @Bean

    public TransactionInterceptor txAdvice() {
        TransactionInterceptor txAdvice = new TransactionInterceptor();
        Properties txAttributes = new Properties();
        List<RollbackRuleAttribute> rollbackRules = new ArrayList<RollbackRuleAttribute>();

        rollbackRules.add(new RollbackRuleAttribute(Exception.class));

        /** If need to add additionall exceptio, add here **/
        DefaultTransactionAttribute readOnlyAttribute = new DefaultTransactionAttribute(TransactionDefinition.PROPAGATION_SUPPORTS);
        readOnlyAttribute.setReadOnly(true);
        readOnlyAttribute.setTimeout(TX_METHOD_TIMEOUT);

        RuleBasedTransactionAttribute writeAttribute = new RuleBasedTransactionAttribute(TransactionDefinition.PROPAGATION_REQUIRED, rollbackRules);
        writeAttribute.setTimeout(TX_METHOD_TIMEOUT);
        String readOnlyTransactionAttributesDefinition = readOnlyAttribute.toString();
        String writeTransactionAttributesDefinition = writeAttribute.toString();

        // write
        txAttributes.setProperty("insert*", writeTransactionAttributesDefinition);
        txAttributes.setProperty("create*", writeTransactionAttributesDefinition);
        txAttributes.setProperty("append*", writeTransactionAttributesDefinition);
        txAttributes.setProperty("drop*", writeTransactionAttributesDefinition);
        txAttributes.setProperty("delete*", writeTransactionAttributesDefinition);
        txAttributes.setProperty("remove*", writeTransactionAttributesDefinition);
        txAttributes.setProperty("edit*", writeTransactionAttributesDefinition);
        txAttributes.setProperty("update*", writeTransactionAttributesDefinition);
        txAttributes.setProperty("refresh*", writeTransactionAttributesDefinition);


        // read-only
        txAttributes.setProperty("get*", readOnlyTransactionAttributesDefinition);
        txAttributes.setProperty("load*", readOnlyTransactionAttributesDefinition);
        txAttributes.setProperty("find*", readOnlyTransactionAttributesDefinition);
        txAttributes.setProperty("query*", readOnlyTransactionAttributesDefinition);
        txAttributes.setProperty("select*", readOnlyTransactionAttributesDefinition);
        txAttributes.setProperty("search*", readOnlyTransactionAttributesDefinition);

        // write rollback-rule
        txAttributes.setProperty("*", writeTransactionAttributesDefinition);
        txAdvice.setTransactionAttributes(txAttributes);
        txAdvice.setTransactionManager(transactionManager);

        return txAdvice;
    }

    @Bean
    public Advisor txAdviceAdvisor() {
        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();
        pointcut.setExpression("(execution(* *..*.service..*.*(..)) || execution(* *..*.services..*.*(..)))");
        pointcut.setExpression(AOP_POINTCUT_EXPRESSION);
        return new DefaultPointcutAdvisor(pointcut, txAdvice());
    }
}
